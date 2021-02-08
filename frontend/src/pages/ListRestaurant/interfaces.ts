

    export interface HasMenuStatus {
        delivery: boolean;
        takeaway: number;
    }

    export interface R {
        res_id: number;
        is_grocery_store: boolean;
        has_menu_status: HasMenuStatus;
    }

    export interface Location {
        address: string;
        locality: string;
        city: string;
        city_id: number;
        latitude: string;
        longitude: string;
        zipcode: string;
        country_id: number;
        locality_verbose: string;
    }

    export interface Title {
        text: string;
    }

    export interface BgColor {
        type: string;
        tint: string;
    }

    export interface RatingObj {
        title: Title;
        bg_color: BgColor;
    }

    export interface UserRating {
        aggregate_rating: string;
        rating_text: string;
        rating_color: string;
        rating_obj: RatingObj;
        votes: number;
    }

    export interface Review {
        review: any[];
    }

    export interface AllReviews {
        reviews: Review[];
    }

    export interface RestaurantData {
        R: R;
        apikey: string;
        id: string;
        name: string;
        url: string;
        location: Location;
        switch_to_order_menu: number;
        cuisines: string;
        timings: string;
        average_cost_for_two: number;
        price_range: number;
        currency: string;
        highlights: string[];
        offers: any[];
        opentable_support: number;
        is_zomato_book_res: number;
        mezzo_provider: string;
        is_book_form_web_view: number;
        book_form_web_view_url: string;
        book_again_url: string;
        thumb: string;
        user_rating: UserRating;
        all_reviews_count: number;
        photos_url: string;
        photo_count: number;
        menu_url: string;
        featured_image: string;
        medio_provider: boolean;
        has_online_delivery: number;
        is_delivering_now: number;
        store_type: string;
        include_bogo_offers: boolean;
        deeplink: string;
        order_url: string;
        order_deeplink: string;
        is_table_reservation_supported: number;
        has_table_booking: number;
        events_url: string;
        phone_numbers: string;
        all_reviews: AllReviews;
        establishment: string[];
        establishment_types: any[];
    }

    export interface Restaurant {
        restaurant: RestaurantData;
    }



