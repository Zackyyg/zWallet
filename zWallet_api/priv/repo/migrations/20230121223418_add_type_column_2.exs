defmodule ZWalletApi.Repo.Migrations.AddTypeColumn2 do
  use Ecto.Migration

  def change do
    alter table("keys") do
      add :type, :string
    end
  end
end
