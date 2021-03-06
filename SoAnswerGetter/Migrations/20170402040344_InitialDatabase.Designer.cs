﻿using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using SoAnswerGetter.Models;

namespace SoAnswerGetter.Migrations
{
    [DbContext(typeof(AnswerGuesserContext))]
    [Migration("20170402040344_InitialDatabase")]
    partial class InitialDatabase
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("SoAnswerGetter.Models.Guess", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AnswerId");

                    b.Property<int>("QuestionId");

                    b.HasKey("Id");

                    b.ToTable("Guesses");
                });
        }
    }
}
