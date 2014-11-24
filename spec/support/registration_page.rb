class RegistrationPage
  include Capybara::DSL
  def visit
    find("button", text: "+ Admin Account").click
  end

  def complete_form(options)
    fill_in 'Email', with: options[:email]
    fill_in 'Password', with: options[:password]
    fill_in 'Password confirmation', with: options[:password]
    click_on 'Register'
  end
end
