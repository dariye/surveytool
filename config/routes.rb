Rails.application.routes.draw do


  scope '/api' do
    mount_devise_token_auth_for 'Admin', at: '/auth'
    resources :users, defaults: {format: :json}
  end

  root 'demo#index'

  # get "*path.html" => "demo#index", :layout => 0

  get '*path' => 'demo#index'

  # devise_scope :admin do
  #   get '/dashboard', to: 'demo#index'
  # end

  # Letter Opener
  # if Rails.env.development?
  #   mount LetterOpenerWeb::Engine, at: '/devel/emails'
  # end

end
