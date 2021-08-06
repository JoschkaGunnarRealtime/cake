import Vue from 'vue';
import Anlassgebundenesfreigebaeck from '../../../src/components/Anlassgebundenesfreigebaeck.vue';
import { shallowMount } from '@vue/test-utils';
import AnlassgebundenesfreigebaeckFixture from '../../fixtures/anlassgebundenesfreigebaeck.fixture.json';
import flushPromises from 'flush-promises'

const $route = {
    params: { anlassgebundenesfreigebaeckidentifikationsnummer: '5'}
}

const axios = {
    get() { return Promise.resolve({ data: AnlassgebundenesfreigebaeckFixture }); }
}

describe('Anlassgebundenesfreigebaeck', () => {
    it('should take and compare a snapshot', async () => {
        const wrapper = shallowMount(Anlassgebundenesfreigebaeck, { mocks: { $route, axios }});
        await flushPromises();
        Vue.nextTick();
        expect(wrapper).toMatchSnapshot();
    });
});