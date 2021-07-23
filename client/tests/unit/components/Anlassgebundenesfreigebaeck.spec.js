import Anlassgebundenesfreigebaeck from '../../../src/components/Anlassgebundenesfreigebaeck.vue';
import { mount } from '@vue/test-utils';

describe('Anlassgebundenesfreigebaeck', () => {
    it('should take and compare a snapshot', () => {
        const wrapper = mount(Anlassgebundenesfreigebaeck);
        expect(wrapper).toMatchSnapshot();
    });
});