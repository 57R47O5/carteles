from enum import Enum
from django.db import models
from django.contrib.auth.models import User


class Persona(models.Model):
    """Representa a una persona física o jurídica que puede administrar carteles."""
    class Tipo(Enum):
        USUARIO = 'U'
        ADMINISTRADOR = 'A'

        @classmethod
        def choices(cls):
            return tuple((tipo.value, tipo.name) for tipo in cls)

    id = models.BigAutoField(primary_key=True)
    tipo = models.CharField(max_length=1, choices=Tipo.choices())
    nombre = models.CharField(max_length=255)
    documento = models.CharField(max_length=30, blank=True, null=True)
    telefono = models.CharField(max_length=30, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    usuario = models.OneToOneField(User, on_delete=models.CASCADE)

    class Meta:
        db_table='persona'

    def __str__(self):
        return self.nombre