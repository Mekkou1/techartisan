import { shallowMount } from '@vue/test-utils'
import ButtonGen from '@/components/ButtonGen.vue'

describe('ButtonGen.vue', () => {
  it('renders the button with correct text', () => {
    const wrapper = shallowMount(ButtonGen, {
      props: { link: '/test' }
    })
    expect(wrapper.text()).toContain('En savoir plus')
  })

  it('renders router-link with correct props', () => {
    const wrapper = shallowMount(ButtonGen, {
      props: { link: '/test-route' }
    })
    const routerLink = wrapper.findComponent({ name: 'RouterLink' })
    expect(routerLink.props('to')).toBe('/test-route')
  })

  it('applies correct CSS classes', () => {
    const wrapper = shallowMount(ButtonGen, {
      props: { link: '/test' }
    })
    expect(wrapper.classes()).toContain('en-savoir-plus-button')
  })
})
