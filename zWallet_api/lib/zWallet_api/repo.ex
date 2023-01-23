defmodule ZWalletApi.Repo do
  use Ecto.Repo,
    otp_app: :zWallet_api,
    adapter: Ecto.Adapters.Postgres
end
