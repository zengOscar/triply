// Package triply provides primitives to interact with the openapi HTTP API.
//
// Code generated by github.com/deepmap/oapi-codegen version v1.8.2 DO NOT EDIT.
package triply

// Defines values for ActivityType.
const (
	ActivityTypeMeal ActivityType = "meal"

	ActivityTypeSightsee ActivityType = "sightsee"

	ActivityTypeTasting ActivityType = "tasting"
)

// Defines values for VendorType.
const (
	VendorTypePublicHouse VendorType = "public house"

	VendorTypeRestaurant VendorType = "restaurant"

	VendorTypeSightsee VendorType = "sightsee"
)

// Activities defines model for Activities.
type Activities []Activity

// Activity defines model for Activity.
type Activity struct {
	// a brief description of the activity
	Description *string `json:"description,omitempty"`
	Id          string  `json:"id"`
	Name        string  `json:"name"`

	// the parent of the activity category
	Parent *string       `json:"parent,omitempty"`
	Type   *ActivityType `json:"type,omitempty"`
}

// ActivityType defines model for ActivityType.
type ActivityType string

// Address defines model for Address.
type Address struct {
	// the name of the city
	City string `json:"city"`

	// the country name
	Country string `json:"country"`

	// the state or territory
	State string `json:"state"`

	// the street number including house number and street name
	Street string `json:"street"`

	// zip code
	Zip string `json:"zip"`
}

// Hours defines model for Hours.
type Hours map[string]interface{}

// Vendor defines model for Vendor.
type Vendor struct {
	Address Address     `json:"address"`
	Hours   *Hours      `json:"hours,omitempty"`
	Id      string      `json:"id"`
	Name    string      `json:"name"`
	Type    *VendorType `json:"type,omitempty"`

	// web site URL
	Web *string `json:"web,omitempty"`
}

// VendorType defines model for VendorType.
type VendorType string
