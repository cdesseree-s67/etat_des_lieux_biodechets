// Aggregates

// Color

// Conditionals
function fnc_coalesce(values, context) {
    for (i = 0; i < values.length; i++) {
        if (values[i] !== null) {
            return values[i];
        }
        
    }
    return 'ERROR';
};

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.log10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return false;
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return false;
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return false;
};

function fnc_ceil(values, context) {
    return false;
};

function fnc_pi(values, context) {
    return false;
};

function fnc_to_int(values, context) {
    return false;
};

function fnc_to_real(values, context) {
    return false;
};

function fnc_to_string(values, context) {
    return false;
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_if(values, context) {
    return false;
};

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return false;
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    return false;
};

function fnc_title(values, context) {
    return false;
};

function fnc_trim(values, context) {
    return false;
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    return false;
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    return false;
};

function fnc_regexp_substr(values, context) {
    return false;
};

function fnc_substr(values, context) {
    return false;
};

function fnc_concat(values, context) {
    return false;
};

function fnc_strpos(values, context) {
    return false;
};

function fnc_left(values, context) {
    return false;
};

function fnc_right(values, context) {
    return false;
};

function fnc_rpad(values, context) {
    return false;
};

function fnc_lpad(values, context) {
    return false;
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function exp_Mthaniseurs_6rule0_eval_expression(context) {
    // "Mise en service" = 'Projet'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Mise en service']  == 'Projet');
    } else {
        return (feature['Mise en service']  == 'Projet');
    }
}


function exp_Mthaniseurs_6rule1_eval_expression(context) {
    // "Gisement indicatif" = 'Agricole'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Gisement indicatif']  == 'Agricole');
    } else {
        return (feature['Gisement indicatif']  == 'Agricole');
    }
}


function exp_Mthaniseurs_6rule2_eval_expression(context) {
    // "Gisement indicatif" = 'Agricole, collectivités'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Gisement indicatif']  == 'Agricole, collectivités');
    } else {
        return (feature['Gisement indicatif']  == 'Agricole, collectivités');
    }
}


function exp_Mthaniseurs_6rule3_eval_expression(context) {
    // "Gisement indicatif" = 'Agricole, industriels'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Gisement indicatif']  == 'Agricole, industriels');
    } else {
        return (feature['Gisement indicatif']  == 'Agricole, industriels');
    }
}


function exp_Mthaniseurs_6rule4_eval_expression(context) {
    // "Gisement indicatif" = 'Agricole, industriels, collectivités'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Gisement indicatif']  == 'Agricole, industriels, collectivités');
    } else {
        return (feature['Gisement indicatif']  == 'Agricole, industriels, collectivités');
    }
}


function exp_Mthaniseurs_6rule5_eval_expression(context) {
    // "Gisement indicatif" = 'Industriels'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Gisement indicatif']  == 'Industriels');
    } else {
        return (feature['Gisement indicatif']  == 'Industriels');
    }
}


function exp_Mthaniseurs_6rule6_eval_expression(context) {
    // "Gisement indicatif" = 'Industriels, collectivités'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Gisement indicatif']  == 'Industriels, collectivités');
    } else {
        return (feature['Gisement indicatif']  == 'Industriels, collectivités');
    }
}


function exp_Biodconditionneurs_7rule0_eval_expression(context) {
    // "Mise en service" = 'Projet'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Mise en service']  == 'Projet');
    } else {
        return (feature['Mise en service']  == 'Projet');
    }
}


function exp_Biodconditionneurs_7rule1_eval_expression(context) {
    // Type = 'Bio-déconditionneur'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Type']  == 'Bio-déconditionneur');
    } else {
        return (feature['Type']  == 'Bio-déconditionneur');
    }
}


function exp_Restauration_8rule0_eval_expression(context) {
    // "Code NAF" = '56.10A'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '56.10A');
    } else {
        return (feature['Code NAF']  == '56.10A');
    }
}


function exp_Restauration_8rule1_eval_expression(context) {
    // "Code NAF" = '56.10B'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '56.10B');
    } else {
        return (feature['Code NAF']  == '56.10B');
    }
}


function exp_Restauration_8rule2_eval_expression(context) {
    // "Code NAF" = '56.10C'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '56.10C');
    } else {
        return (feature['Code NAF']  == '56.10C');
    }
}


function exp_Restauration_8rule3_eval_expression(context) {
    // "Code NAF" = '56.21Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '56.21Z');
    } else {
        return (feature['Code NAF']  == '56.21Z');
    }
}


function exp_Restauration_8rule4_eval_expression(context) {
    // "Code NAF" = '56.29A'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '56.29A');
    } else {
        return (feature['Code NAF']  == '56.29A');
    }
}


function exp_Restauration_8rule5_eval_expression(context) {
    // "Code NAF" = '56.29B'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '56.29B');
    } else {
        return (feature['Code NAF']  == '56.29B');
    }
}


function exp_Restauration_8rule6_eval_expression(context) {
    // "Code NAF" = '56.30Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '56.30Z');
    } else {
        return (feature['Code NAF']  == '56.30Z');
    }
}


function exp_Commercedegros_9rule0_eval_expression(context) {
    // "Code NAF" = '47.11A'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '47.11A');
    } else {
        return (feature['Code NAF']  == '47.11A');
    }
}


function exp_Commercedegros_9rule1_eval_expression(context) {
    // "Code NAF" = '47.11B'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '47.11B');
    } else {
        return (feature['Code NAF']  == '47.11B');
    }
}


function exp_Commercedegros_9rule2_eval_expression(context) {
    // "Code NAF" = '47.11C'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '47.11C');
    } else {
        return (feature['Code NAF']  == '47.11C');
    }
}


function exp_Commercedegros_9rule3_eval_expression(context) {
    // "Code NAF" = '47.11D'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '47.11D');
    } else {
        return (feature['Code NAF']  == '47.11D');
    }
}


function exp_Commercedegros_9rule4_eval_expression(context) {
    // "Code NAF" = '47.11E'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '47.11E');
    } else {
        return (feature['Code NAF']  == '47.11E');
    }
}


function exp_Commercedegros_9rule5_eval_expression(context) {
    // "Code NAF" = '47.11F'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '47.11F');
    } else {
        return (feature['Code NAF']  == '47.11F');
    }
}


function exp_Commercedegros_9rule6_eval_expression(context) {
    // "Code NAF" = '47.19A'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '47.19A');
    } else {
        return (feature['Code NAF']  == '47.19A');
    }
}


function exp_Commercedegros_9rule7_eval_expression(context) {
    // "Code NAF" = '47.19B'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '47.19B');
    } else {
        return (feature['Code NAF']  == '47.19B');
    }
}


function exp_Commercedegros_9rule8_eval_expression(context) {
    // "Code NAF" = '47.21Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '47.21Z');
    } else {
        return (feature['Code NAF']  == '47.21Z');
    }
}


function exp_Commercedegros_9rule9_eval_expression(context) {
    // "Code NAF" = '47.22Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '47.22Z');
    } else {
        return (feature['Code NAF']  == '47.22Z');
    }
}


function exp_Commercedegros_9rule10_eval_expression(context) {
    // "Code NAF" = '47.23Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '47.23Z');
    } else {
        return (feature['Code NAF']  == '47.23Z');
    }
}


function exp_Commercedegros_9rule11_eval_expression(context) {
    // "Code NAF" = '47.24Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '47.24Z');
    } else {
        return (feature['Code NAF']  == '47.24Z');
    }
}


function exp_Commercedegros_9rule12_eval_expression(context) {
    // "Code NAF" = '47.25Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '47.25Z');
    } else {
        return (feature['Code NAF']  == '47.25Z');
    }
}


function exp_Commercedegros_9rule13_eval_expression(context) {
    // "Code NAF" = '47.26Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '47.26Z');
    } else {
        return (feature['Code NAF']  == '47.26Z');
    }
}


function exp_Commercedegros_9rule14_eval_expression(context) {
    // "Code NAF" = '47.29Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '47.29Z');
    } else {
        return (feature['Code NAF']  == '47.29Z');
    }
}


function exp_Commercedegros_9rule15_eval_expression(context) {
    // "Code NAF" = '47.81Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '47.81Z');
    } else {
        return (feature['Code NAF']  == '47.81Z');
    }
}


function exp_Commercededtail_10rule0_eval_expression(context) {
    // "Code NAF" = '46.11Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '46.11Z');
    } else {
        return (feature['Code NAF']  == '46.11Z');
    }
}


function exp_Commercededtail_10rule1_eval_expression(context) {
    // "Code NAF" = '46.17A'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '46.17A');
    } else {
        return (feature['Code NAF']  == '46.17A');
    }
}


function exp_Commercededtail_10rule2_eval_expression(context) {
    // "Code NAF" = '46.17B'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '46.17B');
    } else {
        return (feature['Code NAF']  == '46.17B');
    }
}


function exp_Commercededtail_10rule3_eval_expression(context) {
    // "Code NAF" = '46.33Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '46.33Z');
    } else {
        return (feature['Code NAF']  == '46.33Z');
    }
}


function exp_Commercededtail_10rule4_eval_expression(context) {
    // "Code NAF" = '46.34Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '46.34Z');
    } else {
        return (feature['Code NAF']  == '46.34Z');
    }
}


function exp_Commercededtail_10rule5_eval_expression(context) {
    // "Code NAF" = '46.36Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '46.36Z');
    } else {
        return (feature['Code NAF']  == '46.36Z');
    }
}


function exp_Commercededtail_10rule6_eval_expression(context) {
    // "Code NAF" = '46.37Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '46.37Z');
    } else {
        return (feature['Code NAF']  == '46.37Z');
    }
}


function exp_Commercededtail_10rule7_eval_expression(context) {
    // "Code NAF" = '46.38A'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '46.38A');
    } else {
        return (feature['Code NAF']  == '46.38A');
    }
}


function exp_Commercededtail_10rule8_eval_expression(context) {
    // "Code NAF" = '46.38B'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '46.38B');
    } else {
        return (feature['Code NAF']  == '46.38B');
    }
}


function exp_Commercededtail_10rule9_eval_expression(context) {
    // "Code NAF" = '46.39A'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '46.39A');
    } else {
        return (feature['Code NAF']  == '46.39A');
    }
}


function exp_Commercededtail_10rule10_eval_expression(context) {
    // "Code NAF" = '46.39B'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '46.39B');
    } else {
        return (feature['Code NAF']  == '46.39B');
    }
}


function exp_IAABoissons_11rule0_eval_expression(context) {
    // "Code NAF" = '11.01Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '11.01Z');
    } else {
        return (feature['Code NAF']  == '11.01Z');
    }
}


function exp_IAABoissons_11rule1_eval_expression(context) {
    // "Code NAF" = '11.02A'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '11.02A');
    } else {
        return (feature['Code NAF']  == '11.02A');
    }
}


function exp_IAABoissons_11rule2_eval_expression(context) {
    // "Code NAF" = '11.02B'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '11.02B');
    } else {
        return (feature['Code NAF']  == '11.02B');
    }
}


function exp_IAABoissons_11rule3_eval_expression(context) {
    // "Code NAF" = '11.04Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '11.04Z');
    } else {
        return (feature['Code NAF']  == '11.04Z');
    }
}


function exp_IAABoissons_11rule4_eval_expression(context) {
    // "Code NAF" = '11.05Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '11.05Z');
    } else {
        return (feature['Code NAF']  == '11.05Z');
    }
}


function exp_IAABoissons_11rule5_eval_expression(context) {
    // "Code NAF" = '11.06Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '11.06Z');
    } else {
        return (feature['Code NAF']  == '11.06Z');
    }
}


function exp_IAABoissons_11rule6_eval_expression(context) {
    // "Code NAF" = '11.07B'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '11.07B');
    } else {
        return (feature['Code NAF']  == '11.07B');
    }
}


function exp_IAAAliments_12rule0_eval_expression(context) {
    // "Code NAF" = '10.11Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.11Z');
    } else {
        return (feature['Code NAF']  == '10.11Z');
    }
}


function exp_IAAAliments_12rule1_eval_expression(context) {
    // "Code NAF" = '10.12Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.12Z');
    } else {
        return (feature['Code NAF']  == '10.12Z');
    }
}


function exp_IAAAliments_12rule2_eval_expression(context) {
    // "Code NAF" = '10.13A'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.13A');
    } else {
        return (feature['Code NAF']  == '10.13A');
    }
}


function exp_IAAAliments_12rule3_eval_expression(context) {
    // "Code NAF" = '10.13B'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.13B');
    } else {
        return (feature['Code NAF']  == '10.13B');
    }
}


function exp_IAAAliments_12rule4_eval_expression(context) {
    // "Code NAF" = '10.20Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.20Z');
    } else {
        return (feature['Code NAF']  == '10.20Z');
    }
}


function exp_IAAAliments_12rule5_eval_expression(context) {
    // "Code NAF" = '10.32Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.32Z');
    } else {
        return (feature['Code NAF']  == '10.32Z');
    }
}


function exp_IAAAliments_12rule6_eval_expression(context) {
    // "Code NAF" = '10.39A'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.39A');
    } else {
        return (feature['Code NAF']  == '10.39A');
    }
}


function exp_IAAAliments_12rule7_eval_expression(context) {
    // "Code NAF" = '10.39B'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.39B');
    } else {
        return (feature['Code NAF']  == '10.39B');
    }
}


function exp_IAAAliments_12rule8_eval_expression(context) {
    // "Code NAF" = '10.41A'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.41A');
    } else {
        return (feature['Code NAF']  == '10.41A');
    }
}


function exp_IAAAliments_12rule9_eval_expression(context) {
    // "Code NAF" = '10.42Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.42Z');
    } else {
        return (feature['Code NAF']  == '10.42Z');
    }
}


function exp_IAAAliments_12rule10_eval_expression(context) {
    // "Code NAF" = '10.51A'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.51A');
    } else {
        return (feature['Code NAF']  == '10.51A');
    }
}


function exp_IAAAliments_12rule11_eval_expression(context) {
    // "Code NAF" = '10.51C'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.51C');
    } else {
        return (feature['Code NAF']  == '10.51C');
    }
}


function exp_IAAAliments_12rule12_eval_expression(context) {
    // "Code NAF" = '10.52Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.52Z');
    } else {
        return (feature['Code NAF']  == '10.52Z');
    }
}


function exp_IAAAliments_12rule13_eval_expression(context) {
    // "Code NAF" = '10.61A'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.61A');
    } else {
        return (feature['Code NAF']  == '10.61A');
    }
}


function exp_IAAAliments_12rule14_eval_expression(context) {
    // "Code NAF" = '10.62Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.62Z');
    } else {
        return (feature['Code NAF']  == '10.62Z');
    }
}


function exp_IAAAliments_12rule15_eval_expression(context) {
    // "Code NAF" = '10.71A'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.71A');
    } else {
        return (feature['Code NAF']  == '10.71A');
    }
}


function exp_IAAAliments_12rule16_eval_expression(context) {
    // "Code NAF" = '10.71B'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.71B');
    } else {
        return (feature['Code NAF']  == '10.71B');
    }
}


function exp_IAAAliments_12rule17_eval_expression(context) {
    // "Code NAF" = '10.71C'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.71C');
    } else {
        return (feature['Code NAF']  == '10.71C');
    }
}


function exp_IAAAliments_12rule18_eval_expression(context) {
    // "Code NAF" = '10.71D'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.71D');
    } else {
        return (feature['Code NAF']  == '10.71D');
    }
}


function exp_IAAAliments_12rule19_eval_expression(context) {
    // "Code NAF" = '10.72Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.72Z');
    } else {
        return (feature['Code NAF']  == '10.72Z');
    }
}


function exp_IAAAliments_12rule20_eval_expression(context) {
    // "Code NAF" = '10.73Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.73Z');
    } else {
        return (feature['Code NAF']  == '10.73Z');
    }
}


function exp_IAAAliments_12rule21_eval_expression(context) {
    // "Code NAF" = '10.81Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.81Z');
    } else {
        return (feature['Code NAF']  == '10.81Z');
    }
}


function exp_IAAAliments_12rule22_eval_expression(context) {
    // "Code NAF" = '10.82Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.82Z');
    } else {
        return (feature['Code NAF']  == '10.82Z');
    }
}


function exp_IAAAliments_12rule23_eval_expression(context) {
    // "Code NAF" = '10.83Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.83Z');
    } else {
        return (feature['Code NAF']  == '10.83Z');
    }
}


function exp_IAAAliments_12rule24_eval_expression(context) {
    // "Code NAF" = '10.84Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.84Z');
    } else {
        return (feature['Code NAF']  == '10.84Z');
    }
}


function exp_IAAAliments_12rule25_eval_expression(context) {
    // "Code NAF" = '10.85Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.85Z');
    } else {
        return (feature['Code NAF']  == '10.85Z');
    }
}


function exp_IAAAliments_12rule26_eval_expression(context) {
    // "Code NAF" = '10.86Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.86Z');
    } else {
        return (feature['Code NAF']  == '10.86Z');
    }
}


function exp_IAAAliments_12rule27_eval_expression(context) {
    // "Code NAF" = '10.89Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.89Z');
    } else {
        return (feature['Code NAF']  == '10.89Z');
    }
}


function exp_IAAAliments_12rule28_eval_expression(context) {
    // "Code NAF" = '10.91Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.91Z');
    } else {
        return (feature['Code NAF']  == '10.91Z');
    }
}


function exp_IAAAliments_12rule29_eval_expression(context) {
    // "Code NAF" = '10.92Z'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Code NAF']  == '10.92Z');
    } else {
        return (feature['Code NAF']  == '10.92Z');
    }
}


function exp_Industriesdistributionetrestauration_13rule0_eval_expression(context) {
    // NAF2 = 10

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['NAF2']  == 10);
    } else {
        return (feature['NAF2']  == 10);
    }
}


function exp_Industriesdistributionetrestauration_13rule1_eval_expression(context) {
    // NAF2 = 11

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['NAF2']  == 11);
    } else {
        return (feature['NAF2']  == 11);
    }
}


function exp_Industriesdistributionetrestauration_13rule2_eval_expression(context) {
    // NAF2 = 47

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['NAF2']  == 47);
    } else {
        return (feature['NAF2']  == 47);
    }
}


function exp_Industriesdistributionetrestauration_13rule3_eval_expression(context) {
    // NAF2 = 46

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['NAF2']  == 46);
    } else {
        return (feature['NAF2']  == 46);
    }
}


function exp_Industriesdistributionetrestauration_13rule4_eval_expression(context) {
    // NAF2 = 56

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['NAF2']  == 56);
    } else {
        return (feature['NAF2']  == 56);
    }
}