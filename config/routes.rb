Rails.application.routes.draw do
  mount_devise_token_auth_for 'Admin', at: '/auth'

  scope :api do
    resources :users, defaults: {format: :json}
  end

  root 'demo#index'

  get "*path.html" => "demo#index", :layout => 0

  get '/*path' => 'demo#index'

  # Letter Opener
  # if Rails.env.development?
  #   mount LetterOpenerWeb::Engine, at: '/devel/emails'
  # end

end
