Rails.application.routes.draw do
  resources :trivia, only: [:index, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
