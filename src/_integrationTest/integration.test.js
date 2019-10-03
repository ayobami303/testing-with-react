import moxios from "moxios";
import { fetchPosts } from "../actions";
import { testStore } from '../../utils';

describe('fetchPosts action', () => {
    beforeEach(()=>{
        moxios.install();
    });

    afterEach(()=>{
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {
        const expectedState = [{
            title: 'Example title 1',
            body: 'some text'
        },{
            title: 'Example title 2',
            body: 'some text'
        },{
            title: 'Example title 3',
            body: 'some text'
        }];
        const store = testStore();

        moxios.wait(()=>{
            const request =moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            });
        });

        return store.dispatch(fetchPosts())
        .then(() => {
            const newState = store.getState();
            expect(newState.posts).toBe(expectedState);
        });
    });
});