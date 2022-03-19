// TEST UTILITIES
import { shallowMount } from '@vue/test-utils';
// STORES
import { setActivePinia, createPinia } from 'pinia';
import { useUserStore } from '@/store/user';
// COMPONENTS
import Button from './Button.vue';

describe('Button', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    const user = useUserStore();
  });

  it('should exist', async () => {
    let wrapper = shallowMount(Button);
    expect(wrapper).toBeTruthy();
  });
});
