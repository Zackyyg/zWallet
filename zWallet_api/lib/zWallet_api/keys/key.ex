defmodule ZWalletApi.Keys.Key do
  use Ecto.Schema
  import Ecto.Changeset

  schema "keys" do
    field :name, :string
    field :value, :string
    field :type, :string

    timestamps()
  end

  @doc false
  def changeset(key, attrs) do
    key
    |> cast(attrs, [:value, :name, :type])
    |> validate_required([:value, :name, :type])
  end
end
