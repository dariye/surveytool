require 'rails_helper'

# include Warden::Test::Helpers
# Warden.test_mode!

feature 'Authentication', js: true do
  before do
    @admin = FactoryGirl.create(:confirmed_admin)

    visit '/sign_in'
    @login_page = LoginPage.new

  end


  feature 'login' do
    scenario 'with valid inputs' do
      @login_page.log_in(@admin.email, @admin.password)
      expect(page).to have_content('SIGN OUT')
    end

    scenario 'with invalid credentials' do
      @login_page.log_in("invalid@email.com", "invalid_password")
      expect(page).to have_content('Invalid login credentials. Please try again.')
    end

    scenario 'redirect after login' do
      @login_page.log_in(@admin.email, @admin.password)
      expect(page).to have_content('Survey Responses')
    end
  end
end
