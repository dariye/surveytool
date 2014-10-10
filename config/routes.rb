Rails.application.routes.draw do

  scope :api do
    resources :users, defaults: {format: :json}
  end
  root 'demo#index'
  get '*path' => 'demo#index'

end
