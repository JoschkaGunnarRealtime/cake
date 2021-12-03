import Anlassgebundenesfreigebaeck from '../../../src/components/Anlassgebundenesfreigebaeck.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';


describe('Anlassgebundenesfreigebaeck', () => {
    it('should take and compare a snapshot', () => {
        const localVue = createLocalVue();
        const wrapper = shallowMount(Anlassgebundenesfreigebaeck, {
            localVue,
            mocks: {
                $route: {
                    $params: {
                        anlassgebundenesfreigebaeckidentifikationsnummer: '1234567'
                    }
                }
            }
        });
        expect(wrapper).toMatchSnapshot();
    });
});
