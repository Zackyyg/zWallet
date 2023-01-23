defmodule ZWalletApiWeb.Router do
  use ZWalletApiWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", ZWalletApiWeb do
    pipe_through :api
    get "/:msg", DefaultController, :index
  end

  scope "/create_key", ZWalletApiWeb do
    pipe_through :api
    post "/", KeyController, :create_key
  end

  scope "/create_new_key", ZWalletApiWeb do
    pipe_through :api
    post "/", KeyController, :create_new_key
  end

  scope "/update_key", ZWalletApiWeb do
    pipe_through :api
    post "/:id", KeyController, :update
  end

  scope "/get_keys", ZWalletApiWeb do
    pipe_through :api
    post "/", KeyController, :index
  end

  scope "/get_key_data", ZWalletApiWeb do
    pipe_through :api
    post "/:id", KeyController, :show
  end

  scope "/delete_key", ZWalletApiWeb do
    pipe_through :api
    post "/:id", KeyController, :delete
  end
end
