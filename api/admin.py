from django.contrib import admin
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin
from .models import *


@admin.register(Article)
class ArticleModel(admin.ModelAdmin):
    list_filter = ('title', 'description')
    list_display = ('id', 'title', 'description')

class CustomUserAdmin(UserAdmin):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # UserAdmin.list_display = list(UserAdmin.list_display) + ['token']
        UserAdmin.list_display = ('username',)


admin.site.unregister(User)
admin.site.register(User, CustomUserAdmin)
# class CustomUserAdmin(UserAdmin):
#     def __init__(self, model: Type[_ModelT], admin_site: AdminSite) -> None:
#         super().__init__(model, admin_site)
#     list_display = ('username', 'first name', 'last name', 'staff status')


# admin.site.unregister(User)
# admin.site.register(User, CustomUserAdmin)
# admin.site.

# admin.site.register(User)

# class UserAdminModel(UserAdmin):
#     list_display = ('username', 'first name', 'last name', 'staff status')
# class UserModel(admin.ModelAdmin):
#     list_display = ('username', 'first name', 'last name', 'staff status')
    

# admin.site.register(User, UserModel)

