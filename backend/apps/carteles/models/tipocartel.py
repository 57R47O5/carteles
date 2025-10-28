from django.db import models


class TipoCartel(models.Model):
    """Catálogo de tipos de carteles (valla, LED, etc.)."""
    id = models.BigAutoField(primary_key=True)
    nombre = models.CharField(max_length=100, unique=True)
    descripcion = models.TextField(blank=True, null=True)

    class Meta:
        db_table='tipo_cartel'

    def __str__(self):
        return self.nombre