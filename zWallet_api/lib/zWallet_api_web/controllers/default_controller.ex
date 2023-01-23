defmodule ZWalletApiWeb.DefaultController do
  use ZWalletApiWeb, :controller

  def index(conn, %{"msg" => msg}) do
    text conn, "ZWALLET API IS LIVE - #{msg}"
  end
end
