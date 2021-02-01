import React from 'react'
import {Provider} from 'react-redux'
import {mount, shallow} from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import Sidebar from '../../src/components/Sidebar2'


const mockStore = configureMockStore([thunk])


describe("App", () => {
  it("should render a startup component if startup is not complete", () => {
    const store = mockStore({});
    const wrapper = mount(
      <Provider store={store}>
        <Sidebar />
      </Provider>
    );
    expect(wrapper.type()).toBe('div');
  });
});

