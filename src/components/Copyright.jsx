

const Copyright = () => {
  return (
    <div className="border-t border-white/20">
      <div className="py-6 flex items-center justify-center">
        <small className="text-base text-center">
          Copyright &copy; {new Date().getFullYear()}.
          All rights reserved.
        </small>
      </div>
    </div>
  )
}

export default Copyright