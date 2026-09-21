export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');

    return res.status(405).json({
      error: 'Method not allowed',
    });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return res.status(500).json({
      error:
        'Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID environment variable.',
    });
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
      {
        headers: {
          'X-Goog-Api-Key': apiKey,

          'X-Goog-FieldMask': [
            'rating',
            'userRatingCount',
            'reviews',
            'googleMapsUri',
          ].join(','),
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('Google Places API error:', data);

      return res.status(response.status).json({
        error:
          data?.error?.message ||
          'Google Places API request failed.',
      });
    }

    const reviews = (data.reviews || [])
      .map((review) => ({
        quote:
          review.text?.text ||
          review.originalText?.text ||
          '',

        name:
          review.authorAttribution?.displayName ||
          'Google reviewer',

        authorUri:
          review.authorAttribution?.uri ||
          null,

        authorPhotoUri:
          review.authorAttribution?.photoUri ||
          null,

        rating:
          review.rating ||
          null,

        relativePublishTimeDescription:
          review.relativePublishTimeDescription ||
          null,

        publishTime:
          review.publishTime ||
          null,

        googleMapsUri:
          review.googleMapsUri ||
          null,
      }))
      .filter((review) => review.quote);

    // Don't persistently cache Google Places content.
    res.setHeader('Cache-Control', 'no-store');

    return res.status(200).json({
      rating:
        data.rating ??
        null,

      userRatingCount:
        data.userRatingCount ??
        null,

      googleMapsUri:
        data.googleMapsUri ||
        null,

      reviews,
    });
  } catch (error) {
    console.error(
      'Google reviews endpoint error:',
      error
    );

    return res.status(500).json({
      error:
        'Unable to load Google reviews.',
    });
  }
}