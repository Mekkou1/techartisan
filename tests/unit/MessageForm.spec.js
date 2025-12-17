import { shallowMount } from '@vue/test-utils'
import MessageForm from '@/components/MessageForm.vue'

describe('MessageForm.vue', () => {
  it('renders form elements correctly', () => {
    const wrapper = shallowMount(MessageForm)

    expect(wrapper.find('h2').text()).toBe('Laissez-nous un message')
    expect(wrapper.find('input[type="text"]').exists()).toBe(true)
    expect(wrapper.find('input[type="email"]').exists()).toBe(true)
    expect(wrapper.find('textarea').exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('updates form data when inputs change', async () => {
    const wrapper = shallowMount(MessageForm)

    const nameInput = wrapper.find('input[type="text"]')
    const emailInput = wrapper.find('input[type="email"]')
    const messageTextarea = wrapper.find('textarea')

    await nameInput.setValue('John Doe')
    await emailInput.setValue('john@example.com')
    await messageTextarea.setValue('Test message')

    expect(wrapper.vm.formData.name).toBe('John Doe')
    expect(wrapper.vm.formData.email).toBe('john@example.com')
    expect(wrapper.vm.formData.message).toBe('Test message')
  })

  it('validates form correctly', async () => {
    const wrapper = shallowMount(MessageForm)

    // Form should be invalid initially
    expect(wrapper.vm.isFormValid).toBe(false)

    // Fill form with valid data
    await wrapper.find('input[type="text"]').setValue('John Doe')
    await wrapper.find('input[type="email"]').setValue('john@example.com')
    await wrapper.find('textarea').setValue('Test message')

    expect(wrapper.vm.isFormValid).toBe(true)
  })

  it('shows success message after form submission', async () => {
    const wrapper = shallowMount(MessageForm)

    // Fill form
    await wrapper.find('input[type="text"]').setValue('John Doe')
    await wrapper.find('input[type="email"]').setValue('john@example.com')
    await wrapper.find('textarea').setValue('Test message')

    // Submit form
    await wrapper.find('form').trigger('submit.prevent')

    // Wait for async operation
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.submitStatus).toBe('success')
  })
})
