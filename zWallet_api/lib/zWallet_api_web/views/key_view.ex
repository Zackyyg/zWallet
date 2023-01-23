defmodule ZWalletApiWeb.KeyView do
  use ZWalletApiWeb, :view
  alias ZWalletApiWeb.KeyView

  def render("index.json", %{keys: keys}) do
    %{data: render_many(keys, KeyView, "key.json")}
  end

  def render("show.json", %{key: key}) do
    IO.inspect(ETH.get_balance!(key.value))
    IO.inspect("heel")
    %{data: render_one(key, KeyView, "key.json") |> Map.put("amount", ETH.get_balance!(key.value))}
  end

  def render("key.json", %{key: key}) do
    %{
      id: key.id,
      value: key.value,
      name: key.name,
      type: key.type
    }
  end
end
