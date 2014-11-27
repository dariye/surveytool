require 'rails_helper'



feature 'Registration', js: true do
  let(:email) { Faker::Internet.email }

  before do
    @admin = FactoryGirl.create(:confirmed_admin)

    visit '/sign_in'

    @login_page = LoginPage.new
    @login_page.log_in(@admin.email, @admin.password)

    @registration_page = RegistrationPage.new
    @registration_page.visit
  end

  feature 'with valid inputs' do
    let(:password) { Faker::Internet.password }

    before { @registration_page.complete_form(email: email, password: password) }

    scenario 'account creation' do

      # click_button 'SIGN OUT'
      find("button", text: "SIGN OUT").click

      visit '/sign_in'
      login_page = LoginPage.new
      login_page.log_in(email, password)

      expect(page).to have_content('SIGN OUT')
    end

    scenario 'sign-in upon account creation' do
      expect(page).to have_content('SIGN OUT')
    end
  end

  feature "not to show Admin sigup page" do
    before do
      visit '/sign_out'
      visit '/sign_up'
    end

    scenario "without Admin sign in" do
      expect(page).to_not have_content("SIGN IN")
    end

  end

end

