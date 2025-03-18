resource "aws_route53_zone" "resume-domain-zone" {
  name = var.resume-domain-name
}

resource "aws_route53_record" "resume-dns-cname-record" {
  name = "_a5157518152c6d57965d3b3e33394bca.austinschaefer.com"
  records = [
    "_b45ff8da36318bd03976eb8fcff6d527.xlfgrmvvlj.acm-validations.aws.",
  ]
  ttl     = 300
  type    = "CNAME"
  zone_id = aws_route53_zone.resume-domain-zone.zone_id
}


resource "aws_route53domains_domain" "resume-domain" {
  admin_privacy = true
  auto_renew    = false

  billing_privacy    = true
  domain_name        = var.resume-domain-name
  duration_in_years  = 1
  registrant_privacy = true
  transfer_lock      = true

  admin_contact {
    address_line_1 = var.street_address
    city           = var.city
    contact_type   = "PERSON"
    country_code   = "DE"
    email          = "schaefer.austin.p@inbox.eu"
    first_name     = "Austin"
    last_name      = "Schaefer"
    phone_number   = var.phone
    zip_code       = var.zip
  }

  registrant_contact {
    address_line_1 = var.street_address
    city           = var.city
    contact_type   = "PERSON"
    country_code   = var.country
    email          = "schaefer.austin.p@inbox.eu"
    first_name     = "Austin"
    last_name      = "Schaefer"
    phone_number   = var.phone
    zip_code       = var.zip
  }

  tech_contact {
    address_line_1 = var.street_address
    city           = var.city
    contact_type   = "PERSON"
    country_code   = var.country
    email          = "schaefer.austin.p@inbox.eu"
    first_name     = "Austin"
    last_name      = "Schaefer"
    phone_number   = var.phone
    zip_code       = var.zip
  }
}
