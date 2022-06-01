import { mount } from '@vue/test-utils';
import { describe, it } from 'vitest';
import App from '../App.vue';

describe('App Test Components', () => {
  const wrapper = mount(App);

  it('APP is visible.', () => {
    expect(wrapper.isVisible()).toBe(true);
  });
})