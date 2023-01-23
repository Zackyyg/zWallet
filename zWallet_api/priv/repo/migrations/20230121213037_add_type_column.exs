defmodule ZWalletApi.Repo.Migrations.AddTypeColumn do
  use Ecto.Migration

  def change do
    alter table("keys") do
      add :type, :string
    end
  end
end
