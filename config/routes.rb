Rails.application.routes.draw do

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
