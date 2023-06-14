from django.contrib import admin

# Register your models here.

from .models import *

admin.site.register(TbGuarantees)
admin.site.register(TbElections)
admin.site.register(TbMenu)
admin.site.register(TbPermission)
admin.site.register(TbSorting)
admin.site.register(TbUserRank)
admin.site.register(TbUsers)
admin.site.register(TbUsersRole)
admin.site.register(TbVoters)
admin.site.register(TbPermissionMenu)
admin.site.register(TbTeamMembers)

