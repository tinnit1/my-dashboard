interface Props {
    params: {id: string}
}

export default function PokemonPage({ params: { id } }: Props) {
  return (
    <div>Pokemon Page { id }</div>
  )
}