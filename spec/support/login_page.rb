class LoginPage
  include Capybara::DSL

  def log_in(email, password)
    fill_in "email", with: email
    # find("input[placeholder='Email']").set email
    # find("input[placeholder='Password']").set email
    fill_in "password", with: password

    click_button 'Sign in'
  end
end