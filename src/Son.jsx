function SonComponent(props){
    return(
        <>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* Card Image */}
      <img className="w-full" src="https://via.placeholder.com/300" alt="Card" />

      <div className="px-6 py-4">
        {/* Card Title */}
        <div className="font-bold text-xl mb-2">Card Title</div>

        {/* Card Content */}
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </p>
      </div>

      <div className="px-6 py-4">
        {/* Additional Content */}
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Tag 1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          Tag 2
        </span>
      </div>
    </div>
        
        </>
    )
}

export default SonComponent;