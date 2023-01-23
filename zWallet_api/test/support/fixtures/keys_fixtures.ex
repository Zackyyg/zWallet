defmodule ZWalletApi.KeysFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `ZWalletApi.Keys` context.
  """

  @doc """
  Generate a key.
  """
  def key_fixture(attrs \\ %{}) do
    {:ok, key} =
      attrs
      |> Enum.into(%{
        name: "some name",
        value: "some value"
      })
      |> ZWalletApi.Keys.create_key()

    key
  end
end
