interface Props {
  title: string
  description: string
  secondDescription?: string
}

const EmptyContent: React.FC<Props> = ({
  title,
  description,
  secondDescription,
}) => {
  return (
    <div>
      <h1 className="font-bold md:text-3xl text-xl">{title}</h1>
      <p className="text-gray-500 font-medium mb-4 md:text-base text-sm">
        {description}
      </p>
      {secondDescription && (
        <p className=" md:text-xl text-md text-purple-200 font-medium">
          {secondDescription}
        </p>
      )}
    </div>
  )
}

export default EmptyContent
