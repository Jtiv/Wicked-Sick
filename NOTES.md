# Notes for Wicked-sick

> Search an address or select "my location", and get back locations and information  
> Powered by PositionStack API

## incident return format

> {

    "_id": "624debf9bc47eb32b1f4aa7a",
    "id": 10423,
    "open_date": "3/2/22",
    "name": "Ethanol Release in Port of Palm Beach, FL",
    "location": "Riviera Beach, FL, USA",
    "lat": 26.768562,
    "lon": -80.0497,
    "threat": "Other",
    "tags": "",
    "commodity": "",
    "measure_skim": null,
    "measure_shore": null,
    "measure_bio": null,
    "measure_disperse": null,
    "measure_burn": null,
    "max_ptl_release_gallons": null,
    "posts": 0,
    "description": "Om March 2, 2022, the USCG notified the NOAA SSC that approximately 6500 gallons of ethanol had spilled in the Port of Palm Beach Florida. Discussions with the State of Florida SSC provided that the Department of Environmental Protection had confirmed the ethanol was a food grade product. The SSC was asked to provide information pertaining to the fate and effects of the product, any resource concerns and potential movement of the product following the spill.",
    "__v": 0

},

### Information flow should go as follows

- fetch incidents
- populate pins with lat, lon of incidents
- have searchbar
- on search of bar, center map on area

#### send address request to PsAPI

      One component should do this request: Main Searchbar component
        should return response in component state (lift state to pass to other components)
        should be trigger to rerender function (passed down to the component in props and listed in useEffect(()=>),[here])

#### return lat and lon coordinates
