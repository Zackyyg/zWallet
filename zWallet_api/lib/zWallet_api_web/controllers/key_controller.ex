defmodule ZWalletApiWeb.KeyController do
  use ZWalletApiWeb, :controller

  alias ZWalletApi.Keys
  alias ZWalletApi.Keys.Key

  action_fallback ZWalletApiWeb.FallbackController

  def index(conn, _params) do
    keys = Keys.list_keys()
    render(conn, "index.json", keys: keys)
  end

  def create_key(conn, %{"key" => key_params}) do
    wallet = ETH.Wallet.create(key_params["value"])
    key_params = Map.put(key_params, "value", wallet.eth_address)
    with {:ok, %Key{} = key} <- Keys.create_key(key_params) do
      conn
      |> put_status(:created)
      |> render("show.json", key: key)
    end
  end

  def create_new_key(conn, %{"key" => key_params}) do
    wallet = ETH.Wallet.create
    IO.inspect(wallet)
    key_params = Map.put(key_params, "value", wallet.eth_address)
    with {:ok, %Key{} = key} <- Keys.create_key(key_params) do
      conn
      |> put_status(:created)
      |> render("show.json", key: key)
    end
  end

  def show(conn, %{"id" => id}) do
    key = Keys.get_key!(id)
    render(conn, "show.json", key: key)
  end

  def update(conn, %{"id" => id, "key" => key_params}) do
    key = Keys.get_key!(id)

    with {:ok, %Key{} = key} <- Keys.update_key(key, key_params) do
      render(conn, "show.json", key: key)
    end
  end

  def delete(conn, %{"id" => id}) do
    key = Keys.get_key!(id)

    with {:ok, %Key{}} <- Keys.delete_key(key) do
      send_resp(conn, :no_content, "")
    end
  end
end
