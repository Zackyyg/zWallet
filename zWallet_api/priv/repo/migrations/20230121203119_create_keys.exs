defmodule ZWalletApi.Repo.Migrations.CreateKeys do
  use Ecto.Migration

  def change do
    create table(:keys) do
      add :value, :string
      add :name, :string

      timestamps()
    end
  end
end
