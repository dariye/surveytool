require 'rails_helper'

FactoryGirl.define do
  factory :admin do
    email { Faker::Internet.email }
    password { Faker::Internet.password(8) }
    password_confirmation { password }


    factory :confirmed_admin do
      confirmed_at Time.zone.now
    end
  end
end