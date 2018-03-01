Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'home', to: "foods#home_page"
  post 'home', to: "foods#home_page"
  resource :foods
end
