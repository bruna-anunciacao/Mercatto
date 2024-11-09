from django.db import models

class Customer(models.Model):
    user = models.OneToOneField('users.User', verbose_name='User', on_delete=models.PROTECT)
    
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    birth_date = models.DateField(auto_now=False, auto_now_add=False)
    address = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = 'customer'
        verbose_name_plural = 'customers'
        db_table = 'customers'
    
    def __str__(self):
        return self.name
