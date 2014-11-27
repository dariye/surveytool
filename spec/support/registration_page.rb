class RegistrationPage
  include Capybara::DSL
  def visit
    find("button", text: "+ ADMIN ACCOUNT").click
  end

  def complete_form(options)
    fill_in 'email', with: options[:email]
    fill_in 'password', with: options[:password]
    fill_in 'password_confirmation', with: options[:password]
    click_on 'Register'
  end
end
