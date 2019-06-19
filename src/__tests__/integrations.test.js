import React from 'react';
import {mount} from 'enzyme';
import moxios from 'moxios';

import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=3', {
    status: 200,
    response: [
      {
        text: 'Fetched Fact #1',
        _id: 1
      }, {
        text: 'Fetched Fact #2',
        _id: 2
      }, {
        text: 'Fetched Fact #3',
        _id: 3
      }
    ]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of facts and display them', done => {
  const wrapped = mount(<Root><App/></Root>);

  wrapped.find('button').simulate('click');

  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(3);
    done();
    wrapped.unmount();
  });
});
