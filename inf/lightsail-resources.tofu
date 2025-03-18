import {
  id = "resume-container-service"
  to = aws_lightsail_container_service.resume-container-service
}

resource "aws_lightsail_certificate" "resume-certificate" {
  domain_name = var.resume-domain-name

  name = "resume-certificate"
  subject_alternative_names = [
    var.resume-domain-name
  ]
}

resource "aws_lightsail_container_service" "resume-container-service" {
  name        = "resume-container-service"
  power       = "nano"
  scale       = 1
  is_disabled = true
}

resource "aws_lightsail_container_service" "resume-instance" {
  is_disabled = true
  name        = "resume-container-service"
  power       = "nano"
  scale       = 1

  private_registry_access {
    ecr_image_puller_role {
      is_active = false
    }
  }
}

