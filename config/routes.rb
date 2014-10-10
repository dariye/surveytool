Rails.application.routes.draw do

  scope :api do
    resources :users, defaults: {format: :json}
  end
  root 'demo#index'

end
