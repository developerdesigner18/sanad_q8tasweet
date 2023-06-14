# Generated by Django 4.2 on 2023-05-22 10:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TbElections',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('image', models.CharField(blank=True, max_length=255, null=True)),
                ('title', models.CharField(blank=True, max_length=255, null=True)),
                ('description', models.CharField(blank=True, max_length=255, null=True)),
                ('status', models.IntegerField(blank=True, null=True)),
                ('date', models.DateField(blank=True, null=True)),
                ('location', models.CharField(blank=True, max_length=255, null=True)),
                ('type', models.CharField(blank=True, max_length=255, null=True)),
                ('moderators', models.CharField(blank=True, max_length=255, null=True)),
                ('del_flag', models.IntegerField(blank=True, null=True)),
                ('create_by', models.IntegerField(blank=True, null=True)),
                ('create_date', models.DateTimeField(blank=True, null=True)),
                ('update_by', models.IntegerField(blank=True, null=True)),
                ('update_date', models.DateTimeField(blank=True, null=True)),
            ],
            options={
                'db_table': 'tb_elections',
            },
        ),
        migrations.CreateModel(
            name='TbGuarantees',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('user_id', models.IntegerField(blank=True, null=True)),
                ('election_id', models.IntegerField(blank=True, null=True)),
                ('guarantor_id', models.IntegerField(blank=True, null=True)),
                ('guarantee', models.IntegerField(blank=True, null=True)),
                ('attended', models.IntegerField(blank=True, null=True)),
                ('status', models.CharField(blank=True, max_length=255, null=True)),
                ('del_flag', models.IntegerField(blank=True, null=True)),
                ('create_by', models.IntegerField(blank=True, null=True)),
                ('create_date', models.DateTimeField(blank=True, null=True)),
                ('update_by', models.IntegerField(blank=True, null=True)),
                ('update_date', models.DateTimeField(blank=True, null=True)),
            ],
            options={
                'db_table': 'tb_guarantees',
            },
        ),
        migrations.CreateModel(
            name='TbMenu',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=255, null=True)),
                ('url', models.CharField(blank=True, max_length=255, null=True)),
                ('parentid', models.IntegerField(blank=True, db_column='parentId', null=True)),
                ('del_flag', models.IntegerField(blank=True, null=True)),
                ('create_by', models.IntegerField(blank=True, null=True)),
                ('create_date', models.DateTimeField(blank=True, null=True)),
                ('update_by', models.IntegerField(blank=True, null=True)),
                ('update_date', models.DateTimeField(blank=True, null=True)),
            ],
            options={
                'db_table': 'tb_menu',
            },
        ),
        migrations.CreateModel(
            name='TbPermission',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=255, null=True)),
                ('description', models.CharField(blank=True, max_length=255, null=True)),
                ('del_flag', models.IntegerField(blank=True, null=True)),
                ('create_by', models.IntegerField(blank=True, null=True)),
                ('create_date', models.DateTimeField(blank=True, null=True)),
                ('update_by', models.IntegerField(blank=True, null=True)),
                ('update_date', models.DateTimeField(blank=True, null=True)),
            ],
            options={
                'db_table': 'tb_permission',
            },
        ),
        migrations.CreateModel(
            name='TbPermissionMenu',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('permissionid', models.IntegerField(blank=True, db_column='permissionId', null=True)),
                ('menuid', models.IntegerField(blank=True, db_column='menuId', null=True)),
                ('value', models.CharField(blank=True, max_length=255, null=True)),
                ('label', models.CharField(blank=True, max_length=255, null=True)),
            ],
            options={
                'db_table': 'tb_permissionmenu',
            },
        ),
        migrations.CreateModel(
            name='TbSorting',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=255, null=True)),
                ('del_flag', models.IntegerField(blank=True, null=True)),
                ('create_by', models.IntegerField(blank=True, null=True)),
                ('create_date', models.DateTimeField(blank=True, null=True)),
                ('update_by', models.IntegerField(blank=True, null=True)),
                ('update_date', models.DateTimeField(blank=True, null=True)),
            ],
            options={
                'db_table': 'tb_sorting',
            },
        ),
        migrations.CreateModel(
            name='TbTeamMembers',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('candidate_id', models.IntegerField(blank=True, null=True)),
                ('teamuser_id', models.IntegerField(blank=True, null=True)),
                ('del_flag', models.IntegerField(blank=True, null=True)),
                ('create_by', models.IntegerField(blank=True, null=True)),
                ('create_date', models.DateField(blank=True, null=True)),
                ('update_by', models.IntegerField(blank=True, null=True)),
                ('update_date', models.DateField(blank=True, null=True)),
            ],
            options={
                'db_table': 'tb_team_members',
            },
        ),
        migrations.CreateModel(
            name='TbUserRank',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=255, null=True)),
                ('permissionid', models.IntegerField(blank=True, db_column='permissionId', null=True)),
                ('parentid', models.IntegerField(blank=True, db_column='parentId', null=True)),
                ('del_flag', models.IntegerField(blank=True, null=True)),
                ('create_by', models.IntegerField(blank=True, null=True)),
                ('create_date', models.DateTimeField(blank=True, null=True)),
                ('update_by', models.IntegerField(blank=True, null=True)),
                ('update_date', models.DateTimeField(blank=True, null=True)),
            ],
            options={
                'db_table': 'tb_user_rank',
            },
        ),
        migrations.CreateModel(
            name='TbUsers',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('fname', models.CharField(blank=True, max_length=255, null=True)),
                ('lname', models.CharField(blank=True, max_length=255, null=True)),
                ('avatar', models.CharField(blank=True, max_length=255, null=True)),
                ('role', models.CharField(blank=True, max_length=255, null=True)),
                ('cid', models.IntegerField(blank=True, null=True)),
                ('mobile', models.CharField(blank=True, max_length=255, null=True)),
                ('email', models.CharField(blank=True, max_length=255, null=True)),
                ('username', models.CharField(blank=True, max_length=255, null=True)),
                ('password', models.CharField(blank=True, max_length=255, null=True)),
                ('rank', models.IntegerField(blank=True, null=True)),
                ('election_option', models.CharField(blank=True, max_length=255, null=True)),
                ('del_flag', models.IntegerField(blank=True, null=True)),
                ('create_by', models.IntegerField(blank=True, null=True)),
                ('create_date', models.DateTimeField(blank=True, null=True)),
                ('update_by', models.IntegerField(blank=True, null=True)),
                ('update_date', models.DateTimeField(blank=True, null=True)),
            ],
            options={
                'db_table': 'tb_users',
            },
        ),
        migrations.CreateModel(
            name='TbUsersRole',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=255, null=True)),
                ('permissionid', models.IntegerField(blank=True, db_column='permissionId', null=True)),
                ('del_flag', models.IntegerField(blank=True, null=True)),
                ('create_by', models.IntegerField(blank=True, null=True)),
                ('create_date', models.DateTimeField(blank=True, null=True)),
                ('update_by', models.IntegerField(blank=True, null=True)),
                ('update_date', models.DateTimeField(blank=True, null=True)),
            ],
            options={
                'db_table': 'tb_users_role',
            },
        ),
        migrations.CreateModel(
            name='TbVoters',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('election_id', models.IntegerField(blank=True, null=True)),
                ('civil_id', models.IntegerField(blank=True, null=True)),
                ('name', models.CharField(blank=True, max_length=255, null=True)),
                ('del_flag', models.IntegerField(blank=True, null=True)),
                ('create_by', models.IntegerField(blank=True, null=True)),
                ('create_date', models.DateTimeField(blank=True, null=True)),
                ('update_by', models.IntegerField(blank=True, null=True)),
                ('update_date', models.DateTimeField(blank=True, null=True)),
            ],
            options={
                'db_table': 'tb_voters',
            },
        ),
    ]
