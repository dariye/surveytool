require 'rails_helper'

feature 'Authentication', js: true do
  feature 'login' do
    scenario 'with valid inputs' do
      @admin = FactoryGirl.create(:admin)
      visit '/sign_in'
      fill_in "Email", with: @admin.email
      fill_in "Password", with: @admin.password
      find("button", text: "Sign in").click
      expect(page).to have_content('Sign out')
    end
  end
end
