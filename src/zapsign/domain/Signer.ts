interface Signer {
    external_id: string,
    token: string,
    status: string,
    name: string,
    lock_name: boolean,
    email: string,
    lock_email: boolean,
    phone_country: string,
    phone_number: string,
    lock_phone: boolean,
    times_viewed: number,
    last_view_at: string,
    signed_at: string,
    auth_mode: string,
    qualification: string,
    require_selfie_photo: boolean,
    require_document_photo: boolean,
    geo_latitude: string,
    geo_longitude: string
}

export default Signer